<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Userproduct
 *
 * @ORM\Table(name="UserProduct", indexes={@ORM\Index(name="fk_UserProduct_Product1_idx", columns={"idProduct"})})
 * @ORM\Entity
 */
class Userproduct
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
     * @var string
     *
     * @ORM\Column(name="userUUID", type="string", length=100, nullable=false)
     */
    private $useruuid;

    /**
     * @var int
     *
     * @ORM\Column(name="priceLimit", type="integer", nullable=false)
     */
    private $pricelimit;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="createdAt", type="datetime", nullable=true, options={"default"="current_timestamp()"})
     */
    private $createdat = 'current_timestamp()';

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="updatedAt", type="datetime", nullable=true, options={"default"="current_timestamp()"})
     */
    private $updatedat = 'current_timestamp()';

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

    public function getUseruuid(): ?string
    {
        return $this->useruuid;
    }

    public function setUseruuid(string $useruuid): self
    {
        $this->useruuid = $useruuid;

        return $this;
    }

    public function getPricelimit(): ?int
    {
        return $this->pricelimit;
    }

    public function setPricelimit(int $pricelimit): self
    {
        $this->pricelimit = $pricelimit;

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
