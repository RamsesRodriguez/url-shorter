CREATE TABLE `links` (
	`slug` varchar(32) NOT NULL,
	`creatorId` varchar(255) NOT NULL,
	`originalLink` varchar(255) NOT NULL,
	`description` varchar(255),
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `links_slug` PRIMARY KEY(`slug`)
);
--> statement-breakpoint
ALTER TABLE `links` ADD CONSTRAINT `links_creatorId_user_id_fk` FOREIGN KEY (`creatorId`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;