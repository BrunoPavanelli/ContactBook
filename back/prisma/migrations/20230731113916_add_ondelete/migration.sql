-- DropForeignKey
ALTER TABLE "emails" DROP CONSTRAINT "emails_contactId_fkey";

-- DropForeignKey
ALTER TABLE "phone_numbers" DROP CONSTRAINT "phone_numbers_contactId_fkey";

-- AddForeignKey
ALTER TABLE "phone_numbers" ADD CONSTRAINT "phone_numbers_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "emails" ADD CONSTRAINT "emails_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
