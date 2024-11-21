// Required dependencies
const express = require('express');
const router = express.Router();
const multer = require('multer'); // install this package
const path = require('path');  // import path

// Step 1: create this upload middleware

// Configure multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Images will be stored in uploads directory
    },
    filename: (req, file, cb) => {
        // Generate unique filename with original extension
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        // Accept only image files
        if (file.mimetype.startsWith('image/')) {   // this code is to verify the mime typoe of the file 
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'));
        }
    }
});



// ON YOUR ROUTE USE

// 3.1: Create new event
router.post('/events', upload.single('coverImage'), addEventController);  //coverImage = field name of the file and it can be accesed via req.file

module.exports = router;




// 3.2 update your controller

async function addEventController(req, res){
    try {
        // Validate if image was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Cover image is required' });
        }

        // Create new event
        const event =  EventInsert({
            name: req.body.name,
            details: req.body.details,
            coverImage: `/uploads/${req.file.filename}`,
            date: req.body.date || new Date()
        });

        // Save to database
        const savedEvent = await event.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


