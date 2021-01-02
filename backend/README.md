## Connect to PostgreSQL database
 ```
 psql -d dbadmin -U admin
 ```

## Switch connection to a new database
 ```
 \c dbname
 ```

* To list all databases in the current PostgreSQL database server, you use `\l` command
* To list all tables in the current database, you use `\dt` command

## Describe a table
 ```
 \d table_name
 ```