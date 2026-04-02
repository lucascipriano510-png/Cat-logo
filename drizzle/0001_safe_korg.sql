CREATE TABLE `orders` (
	`id` int AUTO_INCREMENT NOT NULL,
	`whatsappPhone` varchar(20) NOT NULL,
	`items` json NOT NULL,
	`totalPrice` decimal(10,2) NOT NULL,
	`status` enum('pending','sent','confirmed','delivered','cancelled') NOT NULL DEFAULT 'pending',
	`whatsappMessageId` varchar(255),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `orders_id` PRIMARY KEY(`id`)
);
