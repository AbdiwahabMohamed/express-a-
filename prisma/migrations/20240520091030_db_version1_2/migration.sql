/*
  Warnings:

  - You are about to drop the column `IsAccountVerified` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `bio` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `jobTitle` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `profilePhoto` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "IsAccountVerified",
DROP COLUMN "bio",
DROP COLUMN "jobTitle",
DROP COLUMN "profilePhoto";

-- CreateTable
CREATE TABLE "doctor" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "profilePhoto" TEXT NOT NULL DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
    "IsAccountVerified" BOOLEAN NOT NULL DEFAULT false,
    "isDisabled" BOOLEAN NOT NULL DEFAULT false,
    "ticketPrice" DECIMAL(65,30) NOT NULL,
    "certificate" TEXT NOT NULL,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);
