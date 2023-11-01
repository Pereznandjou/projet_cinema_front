export class Film {

    id?: number;
    nom: string;
    resume: string;
    duree: string;
    categorie: string[];
    realisateur: string;
    acteur_principal: string;
    imageCloudinaryPublicId?: string;  // Utilisation du type optionnel
    imageUrl?: string;  // Utilisation du type optionnel
    createdAt?: Date;
  updatedAt?: Date;
  
    constructor(
      //id: number,
      nom: string = 'Entrez un nom',
      resume: string = 'entrer le resumé',
      duree: string = 'entrer la durée',
      categorie: string[] = ['Action'],
      realisateur: string = 'entrer le realisateur',
      acteur_principal: string = 'entrer l\'acteur principal',
      imageCloudinaryPublicId?: string,
      imageUrl?: string
    ) {
      //this.id = id;
      this.nom = nom;
      this.resume = resume;
      this.duree = duree;
      this.categorie = categorie;
      this.realisateur = realisateur;
      this.acteur_principal = acteur_principal;
      this.imageCloudinaryPublicId = imageCloudinaryPublicId;
      this.imageUrl = imageUrl;
    }
  }
  