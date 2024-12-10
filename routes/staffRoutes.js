import { Router } from 'express';
const router = Router();
import { createStaff, getStaff, getStaffById, updateStaff, deleteStaff } from '../controllers/staffController';

/**
 * @route POST /staff
 * @description Create a new staff member
 * @access Public
 */
router.post('/', createStaff);

/**
 * @route GET /staff
 * @description Get all staff members
 * @access Public
 */
router.get('/', getStaff);

/**
 * @route GET /staff/:id
 * @description Get staff member by ID
 * @access Public
 */
router.get('/:id', getStaffById);

/**
 * @route PUT /staff/:id
 * @description Update staff member by ID
 * @access Public
 */
router.put('/:id', updateStaff);

/**
 * @route DELETE /staff/:id
 * @description Delete staff member by ID
 * @access Public
 */
router.delete('/:id', deleteStaff);

export default router;
