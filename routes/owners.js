const express = require('express');
const ownersRouter = express.Router();
const Owner = require("../models/owners.js");

ownersRouter.route("/")
    .get((req, res) => {
        Owner.find((err, owners) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(owners);
        })
    })
    .post((req, res) => {
        const newOwner = new Owner(req.body);
        newOwner.save((err, savedOwner) => {
            console.log(savedOwner)
            if(err) return res.status(500).send(err);
            return res.status(201).send(savedOwner);
        })
    })
ownersRouter.route("/:id")
    .get((req, res) => {
        Owner.findById(req.params.id, (err, foundOwner) => {
            if(err) res.status(500).send(err);
            return res.send(foundOwner);
        })
    })
    .delete((req, res) => {
        Owner.findByIdAndRemove(req.params.id, (err, removedOwner) => {
            if(err) return res.status(500).send(err);
            const response = {
                message: "Owner of the irrigation share was successfully deleted",
                id: removedOwner._id
            }
            return res.status(204).send(removedOwner);
        })
    })
    .put((req, res) => {
        Owner.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updateOwner) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(updateOwner);
        })
    })

module.exports = ownersRouter;