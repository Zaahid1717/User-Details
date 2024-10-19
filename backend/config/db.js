const mongoose = require("mongoose");

const connection = (URL) => {

try {
    mongoose.connect(URL);
    const db = mongoose.connection;

    db.once("open", () => {
    console.log("DB Connected"); 
});

} catch (error) {
    console.log("DB Connection Error:",error);
}
};

module.exports = connection;