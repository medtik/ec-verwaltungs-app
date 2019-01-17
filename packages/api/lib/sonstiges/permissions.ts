import { Role } from '../users/user';
import {
  and,
  not,
  or,
  rule,
  shield
  } from 'graphql-shield';

const isRole = (role: Role) =>
  rule({cache: "contextual"})(async (parent, args, ctx, info) =>
    ctx.user ? ctx.user.role === role : false
  );

const notAllowed = (role: Role) =>
  rule({cache: "contextual"})(async (parent, args, ctx, info) => false);

const isAuth = rule({cache: "contextual"})(async (parent, args, ctx, info) =>
  ctx.user ? true : false
);

export const permissions = shield({
  Person: {
    personID: isAuth,
    vorname: isAuth,
    nachname: isAuth,
    gebDat: isAuth,
    geschlecht: isAuth,
    currentECState: isAuth,
    juLeiCaNr: isAuth,
    fuehrerschein: isAuth,
    rettungsschwimmer: isAuth,
    ersteHilfe: isAuth,
    notizen: isAuth,
    adressen: isAuth,
    emails: isAuth,
    telefon: isAuth,
    fzs: isAuth,
    letzterFzAntrag: isAuth,
    currentVGState: isAuth,
    aks: isAuth,
    anmeldungen: isAuth,
    status: isAuth,
    dsgvo: isAuth,
    letzteDSGVOAuskunft: isAuth
  },
  Anmeldung: {
    anmeldeID: isAuth,
    position: isAuth,
    adresse: isAuth,
    email: isAuth,
    telefon: isAuth,
    wartelistenPlatz: isAuth,
    anmeldeZeitpunkt: isAuth,
    DSGVO_einverstaendnis: isAuth,
    vegetarisch: isAuth,
    lebensmittelAllergien: isAuth,
    gesundheitsinformationen: isAuth,
    bemerkungen: isAuth,
    radfahren: isAuth,
    fahrgemeinschaften: isAuth,
    klettern: isAuth,
    sichEntfernen: isAuth,
    bootFahren: isAuth,
    schwimmen: isAuth,
    infoBrief: isAuth,
    bestaetigungsBrief: isAuth,
    extra_json: isAuth
  },
  Veranstaltung: {
    VeranstaltungID: isAuth,
    bezeichnung: isAuth,
    kurzBezeichnung: isAuth,
    anmeldungen: isAuth,
    veranstaltungsort: isAuth,
    begin: isAuth,
    ende: isAuth,
    minTNAlter: isAuth,
    maxTNAlter: isAuth,
    anzahlPlaetze: isAuth,
    anzahlPlaetzeW: isAuth,
    anzahlPlaetzeM: isAuth,
    preisFruehbucher: isAuth,
    preisNormal: isAuth,
    preisLastMinute: isAuth,
    preisAnzahlungNormal: isAuth,
    preisAnzahlungFruehbucher: isAuth,
    preisAnzahlungLastMinute: isAuth,
    fruehbucherBis: isAuth,
    lastMinuteAb: isAuth,
    kannVorortBezahltWerden: isAuth,
    hatGWarteliste: isAuth
  },
  VeranstaltungsOrt: {
    VeranstaltungsOrtID: isAuth,
    organisation: isAuth,
    bezeichnung: isAuth,
    adresse: isAuth,
    notizen: isAuth,
    anzahl_max: isAuth,
    anzahl_min: isAuth,
    vollverpflegung: isAuth,
    selbstversorger: isAuth,
    kontakte: isAuth
  },
  VeranstaltungsOrtKontakt: {
    VeranstaltungsOrtKontaktID: isAuth,
    ansprechpartner: isAuth,
    typ: isAuth,
    adresse: isAuth,
    telefon: isAuth,
    email: isAuth,
    notizen: isAuth
  },
  Organisation: {
    organisationsID: isAuth,
    bezeichnung: isAuth,
    ansprechpartner: isAuth,
    adresse: isAuth,
    telefon: isAuth,
    email: isAuth,
    notizen: isAuth
  },
  AK: {
    AKID: isAuth,
    bezeichnung: isAuth,
    gehoertZu: isAuth,
    personen: isAuth
  },
  EcKreis: {
    EcKreisID: isAuth,
    bezeichnung: isAuth,
    website: isAuth,
    vgGemeinde: isAuth,
    personen: isAuth
  },
  VGGemeinde: {
    VGGemeindeID: isAuth,
    bezeichnung: isAuth,
    website: isAuth,
    adresse: isAuth,
    personen: isAuth
  },
  FZ: {
    fzID: isAuth,
    person: isAuth,
    seenBy: isAuth,
    seenOn: isAuth,
    kommentar: isAuth
  },
  FZAntrag: {
    FZAntragID: isAuth,
    erstellt: isAuth
  },
  Adresse: {
    adressID: isAuth,
    strasse: isAuth,
    plz: isAuth,
    ort: isAuth,
    land: isAuth
  },
  Email: {
    emailID: isAuth,
    email: isAuth
  },
  Telefon: {
    telefonID: isAuth,
    telefon: isAuth
  },
  Query: {},
  Mutation: {
    CreatePerson: isAuth,
    UpdatePerson: isAuth,
    DeletePerson: isAuth,
    AddPersonAdressen: isAuth,
    RemovePersonAdressen: isAuth,
    AddPersonEmails: isAuth,
    RemovePersonEmails: isAuth,
    AddPersonTelefon: isAuth,
    RemovePersonTelefon: isAuth,
    AddPersonFzs: isAuth,
    RemovePersonFzs: isAuth,
    AddPersonLetzterFzAntrag: isAuth,
    RemovePersonLetzterFzAntrag: isAuth,
    AddPersonAks: isAuth,
    RemovePersonAks: isAuth,
    AddPersonAnmeldungen: isAuth,
    RemovePersonAnmeldungen: isAuth,
    CreateVeranstaltung: isAuth,
    UpdateVeranstaltung: isAuth,
    DeleteVeranstaltung: isAuth,
    AddVeranstaltungAnmeldungen: isAuth,
    RemoveVeranstaltungAnmeldungen: isAuth,
    AddVeranstaltungVeranstaltungsort: isAuth,
    RemoveVeranstaltungVeranstaltungsort: isAuth,
    CreateVeranstaltungsOrt: isAuth,
    UpdateVeranstaltungsOrt: isAuth,
    DeleteVeranstaltungsOrt: isAuth,
    AddVeranstaltungsOrtOrganisation: isAuth,
    RemoveVeranstaltungsOrtOrganisation: isAuth,
    AddVeranstaltungsOrtAdresse: isAuth,
    RemoveVeranstaltungsOrtAdresse: isAuth,
    AddVeranstaltungsOrtKontakte: isAuth,
    RemoveVeranstaltungsOrtKontakte: isAuth,
    CreateVeranstaltungsOrtKontakt: isAuth,
    UpdateVeranstaltungsOrtKontakt: isAuth,
    DeleteVeranstaltungsOrtKontakt: isAuth,
    AddVeranstaltungsOrtKontaktAdresse: isAuth,
    RemoveVeranstaltungsOrtKontaktAdresse: isAuth,
    AddVeranstaltungsOrtKontaktTelefon: isAuth,
    RemoveVeranstaltungsOrtKontaktTelefon: isAuth,
    AddVeranstaltungsOrtKontaktEmail: isAuth,
    RemoveVeranstaltungsOrtKontaktEmail: isAuth,
    CreateOrganisation: isAuth,
    UpdateOrganisation: isAuth,
    DeleteOrganisation: isAuth,
    AddOrganisationAdresse: isAuth,
    RemoveOrganisationAdresse: isAuth,
    AddOrganisationTelefon: isAuth,
    RemoveOrganisationTelefon: isAuth,
    AddOrganisationEmail: isAuth,
    RemoveOrganisationEmail: isAuth,
    CreateAK: isAuth,
    UpdateAK: isAuth,
    DeleteAK: isAuth,
    AddAKPersonen: isAuth,
    RemoveAKPersonen: isAuth,
    CreateEcKreis: isAuth,
    UpdateEcKreis: isAuth,
    DeleteEcKreis: isAuth,
    AddEcKreisVgGemeinde: isAuth,
    RemoveEcKreisVgGemeinde: isAuth,
    AddEcKreisPersonen: isAuth,
    RemoveEcKreisPersonen: isAuth,
    CreateVGGemeinde: isAuth,
    UpdateVGGemeinde: isAuth,
    DeleteVGGemeinde: isAuth,
    AddVGGemeindeAdresse: isAuth,
    RemoveVGGemeindeAdresse: isAuth,
    AddVGGemeindePersonen: isAuth,
    RemoveVGGemeindePersonen: isAuth,
    CreateFZ: isAuth,
    UpdateFZ: isAuth,
    DeleteFZ: isAuth,
    AddFZPerson: isAuth,
    RemoveFZPerson: isAuth,
    AddFZSeenBy: isAuth,
    RemoveFZSeenBy: isAuth,
    CreateFZAntrag: isAuth,
    UpdateFZAntrag: isAuth,
    DeleteFZAntrag: isAuth,
    CreateAdresse: isAuth,
    UpdateAdresse: isAuth,
    DeleteAdresse: isAuth,
    CreateEmail: isAuth,
    UpdateEmail: isAuth,
    DeleteEmail: isAuth,
    CreateTelefon: isAuth,
    UpdateTelefon: isAuth,
    DeleteTelefon: isAuth
  }
});