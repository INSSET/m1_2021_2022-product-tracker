<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Seller
 *
 * @ORM\Table(name="Seller", indexes={@ORM\Index(name="fk_Vendeur_CodePays1_idx", columns={"idCountryCode"})})
 * @ORM\Entity
 */
class Seller
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
     * @ORM\Column(name="nom", type="string", length=100, nullable=false)
     */
    private $nom;

    /**
     * @var \Countrycode
     *
     * @ORM\ManyToOne(targetEntity="Countrycode")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="idCountryCode", referencedColumnName="id")
     * })
     */
    private $idcountrycode;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Website", inversedBy="idseller")
     * @ORM\JoinTable(name="sellerwebsite",
     *   joinColumns={
     *     @ORM\JoinColumn(name="idSeller", referencedColumnName="id")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="idWebsite", referencedColumnName="id")
     *   }
     * )
     */
    private $idwebsite;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idwebsite = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getIdcountrycode(): ?Countrycode
    {
        return $this->idcountrycode;
    }

    public function setIdcountrycode(?Countrycode $idcountrycode): self
    {
        $this->idcountrycode = $idcountrycode;

        return $this;
    }

    /**
     * @return Collection<int, Website>
     */
    public function getIdwebsite(): Collection
    {
        return $this->idwebsite;
    }

    public function addIdwebsite(Website $idwebsite): self
    {
        if (!$this->idwebsite->contains($idwebsite)) {
            $this->idwebsite[] = $idwebsite;
        }

        return $this;
    }

    public function removeIdwebsite(Website $idwebsite): self
    {
        $this->idwebsite->removeElement($idwebsite);

        return $this;
    }

}
