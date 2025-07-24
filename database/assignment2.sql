--inserting a new record for Tony Stark into the account table. 
--The account_id and account_type will be automatically handled (likely auto-incremented or default values).

INSERT INTO account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

--Modify Tony Stark’s record to change the account_type to "Admin"

UPDATE account
SET account_type = 'Admin'
WHERE account_email = 'tony@starkent.com';

--Delete Tony Stark’s record

DELETE FROM account
WHERE account_email = 'tony@starkent.com';


--Modify the "GM Hummer" record description using PostgreSQL’s REPLACE function

UPDATE inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

--Use an INNER JOIN to select the make and model fields from inventory 
--and the classification name field from classification for items belonging to the "Sport" category

SELECT i.inv_make, i.inv_model, c.classification_name
FROM inventory i
INNER JOIN classification c ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

--Update file paths in inv_image and inv_thumbnail columns

UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
