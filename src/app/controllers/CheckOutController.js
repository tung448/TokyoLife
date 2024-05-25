


class CheckOutController{
    // GET /cart // user
    index(req,res){
          res.render('checkOut');
    }
}
module.exports = new CheckOutController();