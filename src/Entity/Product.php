<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Product
 *
 * @ORM\Table(name="Product", indexes={@ORM\Index(name="fk_Produit_Site1_idx", columns={"idWebsite"}), @ORM\Index(name="fk_Produit_Vendeur1_idx", columns={"idSeller"})})
 * @ORM\Entity
 */
class Product
{
    /**
     * @var int
     *
     * @ORM\Column(name="idProduct", type="integer", nullable=false, options={"comment"="Primary Key
"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idproduct;

    /**
     * @var string
     *
     * @ORM\Column(name="nom", type="string", length=45, nullable=false)
     */
    private $nom;

    /**
     * @var string|null
     *
     * @ORM\Column(name="url", type="string", length=700, nullable=true, options={"default"="NULL"})
     */
    private $url = 'NULL';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="createdAt", type="datetime", nullable=true, options={"default"="NULL"})
     */
    private $createdat = 'NULL';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="updatedAt", type="datetime", nullable=true, options={"default"="NULL"})
     */
    private $updatedat = 'NULL';

    /**
     * @var \Seller
     *
     * @ORM\ManyToOne(targetEntity="Seller")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idSeller", referencedColumnName="id")
     * })
     */
    private $idseller;

    /**
     * @var \Website
     *
     * @ORM\ManyToOne(targetEntity="Website")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idWebsite", referencedColumnName="id")
     * })
     */
    private $idwebsite;

    /**
     * @var int|null
     *
     * @ORM\Column(name="target_price", type="integer", nullable=true, options={"default"="NULL"})
     */
    private $target_price = NULL;

    /**
     * @return int|null
     */
    public function getTargetPrice(): ?int
    {
        return $this->target_price;
    }

    /**
     * @param int|null $target_price
     */
    public function setTargetPrice(?int $target_price): void
    {
        $this->target_price = $target_price;
    }

    public function getIdproduct(): ?int
    {
        return $this->idproduct;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getCreatedat(): ?\DateTimeInterface
    {
        return $this->createdat;
    }

    public function setCreatedat(?\DateTimeInterface $createdat): self
    {
        $this->createdat = $createdat;

        return $this;
    }

    public function getUpdatedat(): ?\DateTimeInterface
    {
        return $this->updatedat;
    }

    public function setUpdatedat(?\DateTimeInterface $updatedat): self
    {
        $this->updatedat = $updatedat;

        return $this;
    }

    public function getIdseller(): ?Seller
    {
        return $this->idseller;
    }

    public function setIdseller(?Seller $idseller): self
    {
        $this->idseller = $idseller;

        return $this;
    }

    public function getIdwebsite(): ?Website
    {
        return $this->idwebsite;
    }

    public function setIdwebsite(?Website $idwebsite): self
    {
        $this->idwebsite = $idwebsite;

        return $this;
    }


}
