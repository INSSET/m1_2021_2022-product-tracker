<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Countrycode
 *
 * @ORM\Table(name="CountryCode")
 * @ORM\Entity
 */
class Countrycode
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
     * @ORM\Column(name="code", type="string", length=10, nullable=false, options={"comment"="Example: France -> FR-fr"})
     */
    private $code;

    /**
     * @var string
     *
     * @ORM\Column(name="label", type="string", length=100, nullable=false, options={"comment"="Example: France"})
     */
    private $label;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCode(): ?string
    {
        return $this->code;
    }

    public function setCode(string $code): self
    {
        $this->code = $code;

        return $this;
    }

    public function getLabel(): ?string
    {
        return $this->label;
    }

    public function setLabel(string $label): self
    {
        $this->label = $label;

        return $this;
    }


}
