/*
  Warnings:

  - You are about to drop the column `descricaco` on the `projetos` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `projetos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projetos" DROP COLUMN "descricaco",
ADD COLUMN     "descricao" TEXT NOT NULL;
