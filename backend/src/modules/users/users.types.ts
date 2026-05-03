export type PublicUserDto = {
  id: string;
  name: string;
  email: string;
  age: number;
  city: string;
  occupation: string;
  income: number;
  score: number;
  savingTypeId?: string;
  // savingType: SavingType;
  // bankStatements: BankStatement[];
};
