const connection = require('../config/database')
const getAllUsers = async () => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM Users u`,
    );
    return rows;
}

const getUserID = async (userID) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM Users WHERE id = ?`,
        [userID]
    );
    let user = rows && rows.length > 0 ? rows[0] : { err: 'khong tim thay user' }
    return user;
}

const createUser = async (email, name, city) => {
    const [rows, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?,?)`, [email, name, city]
    );
}

const updateUser = async (email, name, city, id) => {
    const [rows, fields] = await connection.query(
        `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`, [email, name, city, id]
    );
}

const deleteUser = async (userID) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM Users WHERE id = ?`, [userID]
    );
}
module.exports = { getAllUsers, getUserID, createUser, updateUser, deleteUser }