


class CheckOutController{

    //POST 
    indexPost(req,res){
        res.render('checkOut');
    }
    // GET /cart // user
    indexGet(req,res){
          res.render('checkOut');
    }
}
module.exports = new CheckOutController();