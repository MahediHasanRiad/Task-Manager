const TaskModel = require("../Models/TaskModel");

exports.CreateTask = (req, res) => {
  const allData = {
    Title: req.body["Title"],
    Description: req.body["Description"],
    Status: req.body["Status"],
    Email: req.headers.email,
  };

  TaskModel.create(allData, (err, data) => {
    if (err) {
      res.json({ massage: "Task Create Error", err });
    } else {
      res.json({ massage: "success", data });
    }
  });
};

exports.status = (req, res) => {
  const id = req.params.id;
  const query = { _id: id };

  const status = req.params.status;
  const allData = { Status: status };

  TaskModel.updateOne(query, allData, (err, data) => {
    if (err) {
      res.json({ massage: "Task Create Error", err });
    } else {
      res.json({ massage: "success", data });
    }
  });
};

exports.ListByStatus = (req, res) => {
  const status = req.params.status;
  const email = req.headers.email;

  TaskModel.aggregate(
    [
      { $match: { Email: email, Status: status } },
      {
        $project: {
          _id: 1,
          Title: 1,
          Description: 1,
          Status: 1,
          CreateDate: {
            $dateToString: {
              date: "$CreateDate",
              format: "%d-%m-%Y",       // %Y must be capital
            },
          },
        },
      },
    ],
    (err, data) => {
      if (err) {
        res.json({ massage: "List status Failed", err });
        console.log(err)
      } else {
        res.json({ massage: "success", data });
      }
    }
  );
};



exports.TotalByStatus = (req, res) => {
    const email = req.headers.email

    TaskModel.aggregate([
        {$match: {Email: email}},
        {$group: {_id: "$Status", Total: {$count: {}}}}
    ],
    (err, data) => {
        if(err){
            res.json({massage: 'Total By Status Failed', err})
        }else{
            res.json({massage: 'success', data})
        }
    })
}
