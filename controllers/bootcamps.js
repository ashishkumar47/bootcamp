// @desc  Get all Bootcamps
// @route  GET /api/v1/bootcamps
// @access  Public

exports.getBootcamps=(req,res,next)=>{
    res.status(200).json({sucess:true,data:'show all bootcamps'});
}

// @desc  Get single Bootcamp
// @route  GET /api/v1/bootcamps/:id
// @access  Public

exports.getBootcamp=(req,res,next)=>{
    res.status(200).json({sucess:true,data:`get a bootcamp for id: ${req.params.id}`});
}

// @desc  Create single Bootcamp
// @route  POST /api/v1/bootcamps
// @access  Private

exports.createBootcamp=(req,res,next)=>{
    res.status(200).json({sucess:true,data:'create bootcamp'});
}

// @desc  update a Bootcamp
// @route  PUT /api/v1/bootcamps/:id
// @access  Private

exports.updateBootcamp=(req,res,next)=>{
    res.status(200).json({sucess:true,data:`update a bootcamp for id: ${req.params.id}`});
}

// @desc  delete a Bootcamp
// @route  DELETE /api/v1/bootcamps
// @access  Private

exports.deleteBootcamp=(req,res,next)=>{
    res.status(200).json({sucess:true,data:`delete a bootcamp for id:${req.params.id}`});
}