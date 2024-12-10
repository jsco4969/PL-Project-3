import { Router } from 'express';
const router = Router();
import { createMember, getMembers, getMemberById, updateMember, deleteMember } from '../controllers/memberController';

/**
 * @route POST /members
 * @description Create a new member
 * @access Public
 */
router.post('/', createMember);

/**
 * @route GET /members
 * @description Get all members
 * @access Public
 */
router.get('/', getMembers);

/**
 * @route GET /members/:id
 * @description Get a specific member by ID
 * @access Public
 */
router.get('/:id', getMemberById);

/**
 * @route PUT /members/:id
 * @description Update a member by ID
 * @access Public
 */
router.put('/:id', updateMember);

/**
 * @route DELETE /members/:id
 * @description Delete a member by ID
 * @access Public
 */
router.delete('/:id', deleteMember);

export default router;
