const Student = require('../models/student.model')


exports.test = (req, res) => {
    res.send('This is a test page!');
}

exports.student_create = (req, res) => {
    let student = new Student({
        name : req.body.name,
        regno : req.body.regno,
        course : req.body.course
    });
    student.save(err => {
        if (err) {return next(err);}
        res.send('Product created successfully');
    })
};

exports.student_detail = (req, res) => {
    Student.findById(req.params.id, (err, student) => {
        if (err) {return next(err);}
        res.send(student);
    })
}

exports.student_update = (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {$set: req.body},(err, student) => {
        if(err) {return next(err);}
        res.send('Student Record Updated!');
    })
}

exports.student_delete = (req, res) => {
    Student.findByIdAndDelete(req.params.id, (err, student) => {
        if (err) {return next(err);}
        res.send('Student Record Deleted Successfully!');
    })
}

exports.list = (req, res) => {
    Student.find((err, student) => {
        if (err) {console.log("Error in retrieving students list",+ JSON.stringify(err,undefined, 2));}
        res.render('student', {page : 'Student List', student: student});
    })
}
