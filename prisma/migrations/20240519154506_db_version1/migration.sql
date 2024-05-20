-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL,
    "IsAccountVerified" BOOLEAN NOT NULL DEFAULT false,
    "profilePhoto" TEXT NOT NULL DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png',
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
