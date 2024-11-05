const connection = require('../config/database')

const { getAllUsers, getUserID, createUser, updateUser, deleteUser } = require('../services/CRUDservice')
const getHomepage = async (req, res) => {
    let rows = await getAllUsers();
    res.render("homepage.ejs", { listUsers: rows })
}

const getACBpage = (req, res) => {
    res.send("hello abc")
}

const getprofilePage = (req, res) => {
    res.render("example.ejs")
}

const postcreateUser = async (req, res) => {
    let { email, name, city } = req.body

    createUser(email, name, city);
    // let kq = await getAllUsers();
    // res.render("homepage.ejs", { listUsers: kq })
    res.redirect("/");
}

const getcreatePage = (req, res) => {
    res.render("create.ejs")
}

const getcontactPage = (req, res) => {
    res.render("contact.ejs")
}

const getaboutPage = (req, res) => {
    res.render("about.ejs")
}

const getUpdatePage = async (req, res) => {
    let userID = req.params.userID;
    let user = await getUserID(userID);
    console.log('>>>> check rows: ', user)
    res.render("edit.ejs", { userEdit: user })
}

const postupdateUser = async (req, res) => {
    let { email, name, city, id } = req.body
    updateUser(email, name, city, id)
    res.redirect("/");
}

const getDeleteUser = async (req, res) => {
    let userID = req.params.userID;
    deleteUser(userID)
    res.redirect("/");
}
module.exports = {
    getHomepage, getACBpage, getprofilePage, postcreateUser, getcreatePage, getcontactPage, getaboutPage, getUpdatePage, postupdateUser, getDeleteUser
}