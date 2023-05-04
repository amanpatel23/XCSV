# XCSV
A web application that parses the csv files and show the data in tabular form. In this application we can upload any csv file, delete it and view the data of the file in
tabular form. We can make search by any column value to get all the rows that matches the particular search text. We can navigate to different pages.

## Important
While running the application locally on your machine(on localhost), replace the database connection string in mongoose.js file with the local MONGODB connection
string.
```
mongoose.connect('mongodb://127.0.0.1/xcsv');
```

## Installation
1. Clone this repository
```
https://github.com/amanpatel23/XCSV
```
2. Install the dependencies
```
npm install
```
3. run the application
```
npm start
```
4. visit this url in your browser
```
localhost:8000 
```

### Features
- Upload a new CSV file
- Delete any uploaded CSV file
- Show the data of any CSV file in tabular form
- Search by any column value to get all the rows that matches the particular search value
- Pagination, showing at max 100 rows on each page, navigate through pages to see next of previous rows

### Screenshots

#### Home Page
![xcsv_sc_1](https://user-images.githubusercontent.com/53902012/236065634-c8a8fc71-aafb-423d-b8d5-e17395e34eae.png)

#### FileView Page - 1
![xcsv_sc_2](https://user-images.githubusercontent.com/53902012/236065813-40586811-972b-4dd2-a3f6-c352a233b2a4.png)

#### FileView Page - 2
![xcsv_sc_3](https://user-images.githubusercontent.com/53902012/236065888-10b702ad-8a29-4cd1-b265-96cce4b1033c.png)

#### FileView Page - 3
![xcsv_sc_4](https://user-images.githubusercontent.com/53902012/236065948-1d2bf5dd-de1f-4789-9849-0228eb435cc9.png)

