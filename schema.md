### 📊 Demonstration of a Balanced Table and Fields Schema

This is a sample structure that you can use as a reference for your project. We have kept this schema simple and used basic data types. More advanced data types like JSONB or ENUM were not used here, as this is intended to be an easy starting point for beginners. Feel free to use it as a starting point and add your own creativity to adapt it to your specific needs. Below is an example schema for a simple 🎟️ Event Management System.

#### 👥 Users Table
- **user_id** (Primary Key, Integer): A unique identifier assigned to each user.
- **name** (String): The full name of the user.
- **email** (String): The user's email address, which must be unique.
- **phone** (String): The user's contact number.
- **role** (String): The specific role assigned to the user (e.g., 'attendee', 'organizer').
- **password** (String): The hashed password of the user.
- **created_at** (DateTime): The timestamp indicating when the user record was created.
- **updated_at** (DateTime): The timestamp indicating the last update to the user record.

#### 🎟️ Events Table
- **event_id** (Primary Key, Integer): A unique identifier for each event.
- **title** (String): The name or title of the event.
- **description** (Text): A detailed description providing information about the event.
- **start_date** (DateTime): The starting date and time of the event.
- **end_date** (DateTime): The ending date and time of the event.
- **location** (String): A general description of the event's location.
- **address** (String): The detailed address of the event, which may be decomposed into components such as `street`, `city`, `state`, and `country` for more granular data management.
- **status** (String): The current status of the event (e.g., 'upcoming', 'open', 'closed').
- **cover_image** (String): The file path for the cover image associated with the event.
- **capacity** (Integer): The maximum number of attendees allowed for the event.
- **created_at** (DateTime): The timestamp indicating when the event record was created.
- **updated_at** (DateTime): The timestamp indicating the last update to the event record.

#### 📝 Registrations Table
- **registration_id** (Primary Key, Integer): A unique identifier for each registration.
- **user_id** (Foreign Key, references Users Table): The user who is registering for the event.
- **event_id** (Foreign Key, references Events Table): The event for which the registration is being made.
- **registration_date** (DateTime): The date and time when the registration was completed.
- **status** (String): The status of the registration (e.g., 'confirmed', 'cancelled').
- **deleted_at** (DateTime, Nullable): A soft delete field indicating whether the registration was canceled and, if so, when.
- **ticket_pdf** (String): The file path for the generated PDF ticket for the registration.

#### 💬 Comments Table
- **comment_id** (Primary Key, Integer): A unique identifier for each comment.
- **event_id** (Foreign Key, references Events Table): The event associated with the comment.
- **user_id** (Foreign Key, references Users Table): The user who authored the comment.
- **comment_text** (Text): The content of the comment.
- **created_at** (DateTime): The timestamp indicating when the comment was made.
- **parent_comment_id** (Foreign Key, Nullable, references Comments Table): For nested replies, this field indicates the comment to which this comment is replying.

### 📑 Summary
This schema provides a good foundation to start building your Event Management System:
- **Reserved Keywords**: Avoid using reserved keywords such as `user` or `date`.
- **Normalization**: Use linking tables like `Registrations` to manage many-to-many relationships effectively.
- **Supporting Tables**: Separate tables for supplementary details, such as `Comments`, ensure modular design.
- **Soft Deletes**: Use fields like `deleted_at` for logical data removal without permanently deleting information.
- **Address Granularity**: Structuring address fields helps with effective querying and data management.
- **File Handling**: Manage event cover images and ticket PDFs by associating them directly with the relevant tables.

Use this reference to create a database structure that is both flexible and efficient. Remember, you can always modify and extend this schema to better fit the unique requirements of your project.

