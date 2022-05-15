<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220515180108 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE Product ADD price INT DEFAULT NULL, CHANGE idWebsite idWebsite INT DEFAULT NULL COMMENT \'Primary Key
        \', CHANGE idSeller idSeller INT DEFAULT NULL COMMENT \'Primary Key
        \'');
        $this->addSql('ALTER TABLE ProductPrice CHANGE idProduct idProduct INT DEFAULT NULL COMMENT \'Primary Key
        \'');
        $this->addSql('ALTER TABLE Seller CHANGE idCountryCode idCountryCode INT DEFAULT NULL COMMENT \'Primary Key
        \'');
        $this->addSql('ALTER TABLE SellerWebsite CHANGE idSeller idSeller INT NOT NULL COMMENT \'Primary Key
        \', CHANGE idWebsite idWebsite INT NOT NULL COMMENT \'Primary Key
        \'');
        $this->addSql('ALTER TABLE SellerWebsite RENAME INDEX fk_seller_has_website_seller1_idx TO IDX_B2C7D4E980B7B66');
        $this->addSql('ALTER TABLE SellerWebsite RENAME INDEX fk_seller_has_website_website1_idx TO IDX_B2C7D4E57D63615');
        $this->addSql('ALTER TABLE UserProduct CHANGE idProduct idProduct INT DEFAULT NULL COMMENT \'Primary Key
        \'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE Product DROP price, CHANGE idSeller idSeller INT NOT NULL, CHANGE idWebsite idWebsite INT NOT NULL');
        $this->addSql('ALTER TABLE ProductPrice CHANGE idProduct idProduct INT NOT NULL');
        $this->addSql('ALTER TABLE Seller CHANGE idCountryCode idCountryCode INT NOT NULL');
        $this->addSql('ALTER TABLE sellerwebsite CHANGE idSeller idSeller INT NOT NULL, CHANGE idWebsite idWebsite INT NOT NULL');
        $this->addSql('ALTER TABLE sellerwebsite RENAME INDEX idx_b2c7d4e57d63615 TO fk_Seller_has_Website_Website1_idx');
        $this->addSql('ALTER TABLE sellerwebsite RENAME INDEX idx_b2c7d4e980b7b66 TO fk_Seller_has_Website_Seller1_idx');
        $this->addSql('ALTER TABLE UserProduct CHANGE idProduct idProduct INT NOT NULL');
    }
}
