import Member, { find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/member';

/**
 * Create a new member in the database.
 * @async
 * @function createMember
 * @param {Object} req - The request object, containing the member data.
 * @param {Object} res - The response object, used to send back the created member.
 * @throws {Error} If the member creation fails.
 */
async function createMember(req, res) {
  try {
    const { name, email } = req.body;
    const newMember = new Member({ name, email });
    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ message: 'Error creating member', error });
  }
}

/**
 * Get all members in the database.
 * @async
 * @function getMembers
 * @param {Object} req - The request object.
 * @param {Object} res - The response object, used to send back the list of members.
 * @throws {Error} If the database query fails.
 */
async function getMembers(req, res) {
  try {
    const members = await find();
    res.status(200).json(members);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching members', error });
  }
}

/**
 * Get a specific member by ID.
 * @async
 * @function getMemberById
 * @param {Object} req - The request object, containing the member ID.
 * @param {Object} res - The response object, used to send back the member data.
 * @throws {Error} If the member is not found or a database error occurs.
 */
async function getMemberById(req, res) {
  try {
    const member = await findById(req.params.id);
    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching member', error });
  }
}

/**
 * Update a member by ID.
 * @async
 * @function updateMember
 * @param {Object} req - The request object, containing the member ID and updated data.
 * @param {Object} res - The response object, used to send back the updated member.
 * @throws {Error} If the update fails.
 */
async function updateMember(req, res) {
  try {
    const updatedMember = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json(updatedMember);
  } catch (error) {
    res.status(500).json({ message: 'Error updating member', error });
  }
}

/**
 * Delete a member by ID.
 * @async
 * @function deleteMember
 * @param {Object} req - The request object, containing the member ID.
 * @param {Object} res - The response object, used to send back a success message.
 * @throws {Error} If the deletion fails.
 */
async function deleteMember(req, res) {
  try {
    const deletedMember = await findByIdAndDelete(req.params.id);
    if (!deletedMember) {
      return res.status(404).json({ message: 'Member not found' });
    }
    res.status(200).json({ message: 'Member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting member', error });
  }
}

export default {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
