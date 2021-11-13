# Pharmiplus
Full stack web application using MERN ( mongoDB , express , react , nodejs )

frontend - react and redux
backend - nodejs
database - mongoDB cloud database

A web application that sells medicines online , similar to any ecommerce website

Some cool features
1) The system excepts only one time registration for a valid email id, in other words no to users can have a same email id.
2) Password will remain a secret even to the admin who has access to the mongoDB database since passwords are stored in the encrypted format.
3) Orders that are shipped cannot be cancelled.
4) Orders cannot be cannot be cancelled after 24 of booking. In case 3 and 4 the order state in the database will be changed to shipped so the cancell button in the frontend will be automatically disssabelled.
