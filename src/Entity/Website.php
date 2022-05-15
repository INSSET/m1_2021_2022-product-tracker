<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Website
 *
 * @ORM\Table(name="Website")
 * @ORM\Entity
 */
class Website
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
     * @var string|null
     *
     * @ORM\Column(name="nom", type="string", length=100, nullable=true, options={"default"="NULL"})
     */
    private $nom = 'NULL';

    /**
     * @var string|null
     *
     * @ORM\Column(name="url", type="string", length=200, nullable=true, options={"default"="NULL"})
     */
    private $url = 'NULL';

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Seller", mappedBy="idwebsite")
     */
    private $idseller;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idseller = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(?string $nom): self
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

    /**
     * @return Collection<int, Seller>
     */
    public function getIdseller(): Collection
    {
        return $this->idseller;
    }

    public function addIdseller(Seller $idseller): self
    {
        if (!$this->idseller->contains($idseller)) {
            $this->idseller[] = $idseller;
            $idseller->addIdwebsite($this);
        }

        return $this;
    }

    public function removeIdseller(Seller $idseller): self
    {
        if ($this->idseller->removeElement($idseller)) {
            $idseller->removeIdwebsite($this);
        }

        return $this;
    }

}
