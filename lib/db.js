import mongoose from "mongoose"

const connectDB= async () => {
  try {
    await mongoose.connect('mongodb+srv://suthakar3mca:MTP20oFDwlNe6K2X@cluster0.ovqu2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log("Mongo Db Was Connected")

  } catch (error) {
    console.error(error.message)
    process.exit(1);

  }
}
export default connectDB