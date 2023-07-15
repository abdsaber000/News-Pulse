import express from 'express'

const router = express.Router()

router.route('/').get().post();

router.route('/:id').get().patch().delete()

export {router}