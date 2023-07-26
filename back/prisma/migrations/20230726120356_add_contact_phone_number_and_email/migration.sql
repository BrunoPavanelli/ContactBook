-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "id" TEXT NOT NULL,

    CONSTRAINT "PhoneNumber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Email" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Email_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ContactToPhoneNumber" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ContactToEmail" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToPhoneNumber_AB_unique" ON "_ContactToPhoneNumber"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToPhoneNumber_B_index" ON "_ContactToPhoneNumber"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToEmail_AB_unique" ON "_ContactToEmail"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToEmail_B_index" ON "_ContactToEmail"("B");

-- AddForeignKey
ALTER TABLE "contacts" ADD CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToPhoneNumber" ADD CONSTRAINT "_ContactToPhoneNumber_A_fkey" FOREIGN KEY ("A") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToPhoneNumber" ADD CONSTRAINT "_ContactToPhoneNumber_B_fkey" FOREIGN KEY ("B") REFERENCES "PhoneNumber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToEmail" ADD CONSTRAINT "_ContactToEmail_A_fkey" FOREIGN KEY ("A") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToEmail" ADD CONSTRAINT "_ContactToEmail_B_fkey" FOREIGN KEY ("B") REFERENCES "Email"("id") ON DELETE CASCADE ON UPDATE CASCADE;
