var mongoose=require('mongoose');

var schema=mongoose.Schema;

const BookingSchema=new schema({
	_id: mongoose.Schema.Types.ObjectId,
	uid: schema.Types.ObjectId,
	vgid: Number,
	v_id: schema.Types.ObjectId,
	startDate: Date,
	endDate: Date
})

module.exports=mongoose.model('booking',BookingSchema);