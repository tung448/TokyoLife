

class SuccessOrderController{
    //POST
    indexPost(req,res){
        console.log(req.body.UserName);
        console.log(req.body.emailUser);
        console.log(req.body.locationOfUser);
        res.render('successOrder');
    }
    // GET
    indexGet(req,res){
          res.render('successOrder');
    }
}
module.exports = new SuccessOrderController();