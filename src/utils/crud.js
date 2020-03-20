export const getOne = model => async (req, res) => {
  try {
    const { id } = req.params
    const userId = req.user._id
    const doc = await model.findOne({ _id: id, createdBy: userId }).exec()
    if (!doc) {
      return res.status(404).end()
    }
    res.status(200).json({ data: doc })
  } catch (e) {
    res.status(400).end()
  }
}

export const getMany = model => async (req, res) => {
  try {
    const docs = await model.find({ createdBy: req.user._id })
    res.status(200).json({ data: docs })
  } catch (e) {
    res.status(400).end()
  }
}

export const createOne = model => async (req, res) => {
  try {
    const doc = await model.create({ ...req.body, createdBy: req.user._id })
    res.status(201).json({ data: doc })
  } catch (e) {
    res.status(400).end()
  }
}

export const updateOne = model => async (req, res) => {
  try {
    const doc = await model.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      req.body,
      { new: true }
    )
    if (!doc) {
      return res.status(400).end()
    }
    res.status(200).json({ data: doc })
  } catch (e) {
    res.status(400).end()
  }
}

export const removeOne = model => async (req, res) => {
  try {
    const doc = await model
      .findOneAndRemove({ _id: req.params.id, createdBy: req.user._id })
      .exec()
    if (!doc) {
      return res.status(400).end()
    }
    res.status(200).json({ data: doc })
  } catch (e) {
    res.status(400).end()
  }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
