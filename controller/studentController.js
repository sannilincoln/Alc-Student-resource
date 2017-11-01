const Student = require('../models/student');

module.exports = {
  index: function (req, res, next) {
    res.status(200).json({
      "message": "access the app via api/students"
    });
  },
  allStudent: (req, res, next) =>{
    Student.find({}).then(data =>{
      res.status(200).json(data);
    }).catch(err =>{
      next(err);
    });
  },
  student: (req, res, next) => {
    let studentId = req.params.id;
    Student.findById(studentId).then(data =>{
      res.status(200).json(data);
    }).catch(err =>{
      next(err);
    });
  },
  addStudent:  (req, res, next) => {
    Student.create(req.body).then(data =>{
      res.status(201).json(data);
    }).catch(err =>{
      next(err);
    });

  },
  editStudent: function (req, res, next) {
    let studentId = req.params.id;
    Student.findByIdAndUpdate(studentId, req.body).then(()=>{
      Student.findOne({_id: req.params.id}).then(data =>{
        res.status(201).json(data);
      });
    }).catch(err =>{
      next(err);
    });
  },
  createForm: function (req, res) {
    res.render('./newStudent');
  },
  deleteStudent:  (req, res, next) => {
    Student.findByIdAndRemove({_id: req.params.id}).then(data =>{
    res.status(200).send(data);
  }).catch(err =>{
    next(err);
  });
 
  }
};
