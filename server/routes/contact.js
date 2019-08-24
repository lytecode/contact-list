const router = require("express").Router();
const contactControllers = require("../controllers/contact");

router.get("/", contactControllers.findContacts);
router.get("/:contactId", contactControllers.findContact);
router.post("/", contactControllers.createContact);
router.put("/:contactId", contactControllers.updateContact);
router.delete("/:contactId", contactControllers.removeContact);

module.exports = router;
