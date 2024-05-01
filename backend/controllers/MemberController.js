import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const getMembers = async (req, res) =>{
    try {
        const response = await prisma.member.findMany();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getMemberById = async (req, res) =>{
    try {
        const response = await prisma.member.findUnique({
            where:{
                id: Number(req.params.id)
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

export const createMember = async (req, res) =>{
    const {name, alamat, donasi} = req.body;
    try {
        const member = await prisma.member.create({
            data: {
                name: name,
                alamat: alamat,
                donasi: donasi
    }
        });
        res.status(201).json(member);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateMember = async (req, res) =>{
    const {name, alamat, donasi} = req.body;
    try {
        const member = await prisma.member.update({
            where:{
                id: Number(req.params.id)
            },
            data: {
                name: name,
                alamat: alamat,
                donasi: donasi
    }
        });
        res.status(200).json(member);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteMember = async (req, res) =>{
    try {
        const member = await prisma.member.delete({
            where:{
                id: Number(req.params.id)
            },
        });
        res.status(200).json(member);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}