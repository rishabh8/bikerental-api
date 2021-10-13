var mongoose=require('mongoose');

var schema=mongoose.Schema;

const userSchema=new schema({
	_id: mongoose.Schema.Types.ObjectId,
	email: String,
	pwd: String,
	username: String
})

module.exports=mongoose.model('User',userSchema);