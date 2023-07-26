/*
  Warnings:

  - You are about to drop the `Email` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PhoneNumber` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ContactToEmail" DROP CONSTRAINT "_ContactToEmail_B_fkey";

-- DropForeignKey
ALTER TABLE "_ContactToPhoneNumber" DROP CONSTRAINT "_ContactToPhoneNumber_B_fkey";

-- DropTable
DROP TABLE "Email";

-- DropTable
DROP TABLE "PhoneNumber";

-- CreateTable
CREATE TABLE "phoneNumbers" (
    "id" TEXT NOT NULL,

    CONSTRAINT "phoneNumbers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "emails" (
    "id" TEXT NOT NULL,

    CONSTRAINT "emails_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "_ContactToPhoneNumber" ADD CONSTRAINT "_ContactToPhoneNumber_B_fkey" FOREIGN KEY ("B") REFERENCES "phoneNumbers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToEmail" ADD CONSTRAINT "_ContactToEmail_B_fkey" FOREIGN KEY ("B") REFERENCES "emails"("id") ON DELETE CASCADE ON UPDATE CASCADE;
