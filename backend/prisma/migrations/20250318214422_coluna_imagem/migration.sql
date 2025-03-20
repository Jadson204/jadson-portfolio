/*
  Warnings:

  - Added the required column `imagem` to the `tecnologias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tecnologias" ADD COLUMN     "imagem" TEXT NOT NULL;
