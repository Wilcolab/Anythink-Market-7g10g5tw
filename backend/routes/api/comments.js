/**
 * Express router for handling comment-related API routes.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments.
    * 
    * @route GET /api/comments
    * @returns {Object[]} 200 - Array of comment objects
    * @returns {Object} 500 - Error message
    */

 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * 
    * @route DELETE /api/comments/:id
    * @param {string} id - Comment ID
    * @returns {Object} 200 - Success message
    * @returns {Object} 404 - Comment not found message
    * @returns {Object} 500 - Error message
    */

 /**
    * POST /
    * Creates a new comment.
    * 
    * @route POST /api/comments
    * @param {string} text - Comment text
    * @param {string} author - Author of the comment
    * @returns {Object} 201 - Created comment object
    * @returns {Object} 500 - Error message
    */

 /**
    * PUT /:id
    * Updates a comment by its ID.
    * 
    * @route PUT /api/comments/:id
    * @param {string} id - Comment ID
    * @param {Object} body - Fields to update
    * @returns {Object} 200 - Updated comment object
    * @returns {Object} 404 - Comment not found message
    * @returns {Object} 500 - Error message
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
"// Hey GitHub Copilot, please complete the code in this file to handle comment-related API routes.";
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching comments", error });
  }
});

//add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedComment = await Comment.findByIdAndDelete(id);
    if (!deletedComment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting comment", error });
  }
});
router.post("/", async (req, res) => {
    try {
        const { text, author } = req.body;
        const newComment = new Comment({ text, author });
        const savedComment = await newComment.save();
        res.status(201).json(savedComment);
    } catch (error) {
        res.status(500).json({ message: "Error creating comment", error });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updatedComment = await Comment.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedComment) {
            return res.status(404).json({ message: "Comment not found" });
        }
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: "Error updating comment", error });
    }
});

