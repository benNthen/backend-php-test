-- ALTER TABLE todos
-- ADD COLUMN is_complete BOOLEAN DEFAULT 0;

SELECT id, user_id, description, CASE WHEN is_complete THEN 'Yes' ELSE 'No' END AS completed FROM todos;
