import dbConnect from '../../../utils/dbConnect';
import Client from '../../../Models/Clients';

dbConnect();


export default async(req, res) => {
  const {
    query: {id},
    method
  } =req

  switch (method) {
    case  'GET': //Gets the Clients info 
        try {
            const client = await Client.findById(id);

            if(!client) {
                return res.status(400).json({success:false});  //Checks if the note we are trying to find exists, if it doesnt we return false
            }

            res.status(200).json({success:true , data:client});
        } catch (error) {
            return res.status(400).json({success:false});
        }
        break;
    case 'PUT':  //Updates the client info
        try {
            const client = await Client.findByIdAndUpdate(id, req.body, {
                new:true,
                runValidators:true

            });

            if(!client) {
                return res.status(400).json({success:false});
            }

            res.status(200).json({success:true , data:client});


        } catch (error) {
            return res.status(400).json({success:false});
        }
        break;

    case 'DELETE':


        try {
            const deletedClient = await Client.deleteOne({ _id:id});


            if(!deletedClient){
                return res.status(400).json({success:false});
            }

            res.status(200).json({success:true , data:{}});
        } catch (error) {
            return res.status(400).json({success:false});
        }
        break;

    default:
        return res.status(400).json({success:false});
        
        break;

  }
}
