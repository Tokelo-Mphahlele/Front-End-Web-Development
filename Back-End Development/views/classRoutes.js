const path = require('path')
const express = require('express')
const router = express.Router()
const classList = [] // our class list array
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})
router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})
router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})
module.exports = router

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})
router.post('/api/create', function (req, res) {
  console.log('this will create a student entry')
  res.redirect(req.baseUrl + '/create')
})
router.post('/api/delete', function (req, res) {
  console.log('this will delete a student entry')
  res.redirect(req.baseUrl + '/delete')
})

router.post('/api/edit', function (req, res) {
  console.log('this will edit a student entry')
  res.redirect(req.baseUrl + '/edit')
})

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList[req.params.id]) // Notice the wildcard in the URL?
// Try browsing to /api/get/0 once you've added some entries
})
router.post('/api/create', function (req, res) {
  console.log('this will create a student entry')
  res.redirect(req.baseUrl + '/create')
})
router.post('/api/delete', function (req, res) {
  console.log('this will delete a student entry')
  res.redirect(req.baseUrl + '/delete')
})
router.post('/api/edit', function (req, res) {
  console.log('this will edit a student entry')
  res.redirect(req.baseUrl + '/edit')
})
