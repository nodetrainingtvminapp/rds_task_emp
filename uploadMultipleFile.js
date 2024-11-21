// Required dependencies
const express = require('express');
const router = express.Router();
const multer = require('multer'); // install this package
const path = require('path');  // import path

// Step 1: create this upload middleware

// Configure multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Store in uploads directory
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

// Configure multer upload settings
const upload = multer({
    storage: storage,
    limits: { 
        fileSize: 5 * 1024 * 1024, // 5MB limit per file
        files: 5 // Max 5 files
    },
    fileFilter: (req, file, cb) => {
        // Verify file mime type
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});

module.exports = upload;



// ON YOUR ROUTE USE

// 3.1: Create new event
router.post('/events', upload.fields([
        { name: 'coverImage', maxCount: 1 },
        { name: 'additionalImages', maxCount: 4 }
    ]),, addEventController);  //coverImage = field name of the file and it can be accesed via req.file

module.exports = router;




// 3.2 update your controller

async function addEventController(req, res){
    try {
        // Validate if image was uploaded
         if (!req.files || !req.files.coverImage) {
                return res.status(400).json({ 
                    success: false, 
                    message: 'Cover image is required' 
                });
            }

            // Get cover image path
            const coverImagePath = `/uploads/${req.files.coverImage[0].filename}`;
            
            // Get additional images paths if any
            const additionalImagePaths = req.files.additionalImages 
                ? req.files.additionalImages.map(file => `/uploads/${file.filename}`)
                : [];
      
        // Create new event
        const event =  EventInsert({
            name: req.body.name,
            details: req.body.details,
            coverImage: coverImagePath,
            additionalImages: additionalImagePaths,
            date: req.body.date || new Date()
        });

        // Save to database
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

