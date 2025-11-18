import mongoose from 'mongoose';

const InstallationSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { strict: false });

export default mongoose.model('Installation', InstallationSchema);
