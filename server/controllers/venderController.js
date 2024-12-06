import Vender from "../models/vendorModel.js";


//create a new user
export const  createVender = async(req, res)=>{
    try{
        console.log(req.body);
        const venderData= Vender(req.body);
        if(!venderData){
            return res.status(404).json({msg:"vender not found"});
        }
        await venderData.save();
        res.status(200).json({msg:"vender created succcessfully"});
    }
    catch (err){
        res.status(500).json({ error: err.message });
    }
}




export const getAllVenders = async (req,res)=>{
    try{
       const venderData =  await Vender.find();
       if (!venderData){
        return res.status(404).json({msg : "vender not found"});
       }
       
       res.status(200).json(venderData);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

export const getOneVender = async (req,res)=>{
    try{
        const id = req.params.id;
       const venderData =  await Vender.findById(id);
       if (!venderData){
        return res.status(404).json({msg : "vender not found"});
       }
       res.status(200).json(venderData);
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

    export const updateVender = async (req,res)=>{

        try{
            const id = req.params.id;
           const venderExist =  await Vender.findById(id);
           if (!venderExist){
            return res.status(404).json({msg : "vender not found"});
           }
        
        await Vender.findByIdAndUpdate(id,req.body,{ new: true})
        res.status(200).json({msg: "vender updated successfully"});
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }

    export const deleteVender = async (req,res)=>{

        try{
            const id = req.params.id;
           const venderExist =  await Vender.findById(id);
           if (!venderExist){
            return res.status(404).json({msg : "vender not found"});
           }
        
        await Vender.findByIdAndDelete(id,req.body,{ new: true})
        res.status(200).json({msg: "vender data successfully deleted"}
        );
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }