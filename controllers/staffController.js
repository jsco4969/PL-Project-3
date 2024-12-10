import Staff, { find, findById, findByIdAndUpdate, findByIdAndDelete } from '../models/staff';

/**
 * Create a new staff member in the database.
 * @async
 * @function createStaff
 * @param {Object} req - The request object, containing the staff member data.
 * @param {Object} res - The response object, used to send back the created staff member.
 * @throws {Error} If the staff member creation fails.
 */
async function createStaff(req, res) {
  try {
    const { name, role, email } = req.body;
    const newStaff = new Staff({ name, role, email });
    await newStaff.save();
    res.status(201).json(newStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error creating staff member', error });
  }
}

/**
 * Get all staff members in the database.
 * @async
 * @function getStaff
 * @param {Object} req - The request object.
 * @param {Object} res - The response object, used to send back the list of staff members.
 * @throws {Error} If the database query fails.
 */
async function getStaff(req, res) {
  try {
    const staff = await find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff members', error });
  }
}

/**
 * Get a specific staff member by ID.
 * @async
 * @function getStaffById
 * @param {Object} req - The request object, containing the staff member ID.
 * @param {Object} res - The response object, used to send back the staff member data.
 * @throws {Error} If the staff member is not found or a database error occurs.
 */
async function getStaffById(req, res) {
  try {
    const staff = await findById(req.params.id);
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching staff member', error });
  }
}

/**
 * Update a staff member by ID.
 * @async
 * @function updateStaff
 * @param {Object} req - The request object, containing the staff member ID and updated data.
 * @param {Object} res - The response object, used to send back the updated staff member.
 * @throws {Error} If the update fails.
 */
async function updateStaff(req, res) {
  try {
    const updatedStaff = await findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStaff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(500).json({ message: 'Error updating staff member', error });
  }
}

/**
 * Delete a staff member by ID.
 * @async
 * @function deleteStaff
 * @param {Object} req - The request object, containing the staff member ID.
 * @param {Object} res - The response object, used to send back a success message.
 * @throws {Error} If the deletion fails.
 */
async function deleteStaff(req, res) {
  try {
    const deletedStaff = await findByIdAndDelete(req.params.id);
    if (!deletedStaff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.status(200).json({ message: 'Staff member deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting staff member', error });
  }
}

export default {
  createStaff,
  getStaff,
  getStaffById,
  updateStaff,
  deleteStaff,
};
