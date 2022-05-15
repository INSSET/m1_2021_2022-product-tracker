<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Productprice
 *
 * @ORM\Table(name="ProductPrice", indexes={@ORM\Index(name="fk_ProduitPrix_Produit_idx", columns={"idProduct"})})
 * @ORM\Entity
 */
class Productprice
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false, options={"comment"="Primary Key
"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var int|null
     *
     * @ORM\Column(name="price", type="integer", nullable=true, options={"default"="NULL"})
     */
    private $price = NULL;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="date", type="datetime", nullable=true, options={"default"="current_timestamp()"})
     */
    private $date = 'current_timestamp()';

    /**
     * @var \Product
     *
     * @ORM\ManyToOne(targetEntity="Product")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idProduct", referencedColumnName="idProduct")
     * })
     */
    private $idproduct;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(?int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getIdproduct(): ?Product
    {
        return $this->idproduct;
    }

    public function setIdproduct(?Product $idproduct): self
    {
        $this->idproduct = $idproduct;

        return $this;
    }


}
